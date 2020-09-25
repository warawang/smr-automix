import request from 'request-promise-native';
import { Html5Entities } from 'html-entities';
import fs from 'fs';

const STORE_INDEX = 5;
const API = 'http://smr.jayjason.com/papi/automix?storeindex=' + STORE_INDEX;
const SYNC_INTERVAL = 5000;
const OUTPUT_PATH = '/Users/w/Documents/VirtualDJ/Playlists/requests.m3u';

(async () => {
  await sync();

  setInterval(async () => {
    await sync();
  }, SYNC_INTERVAL);
})();

async function sync() {
  const res = await request.get(API);
  const json = JSON.parse(res);
  // console.log(json.result);
  let m3u = '';
  for (const item of json.result) {
    m3u += item2m3u(item);
  }

  try {
    fs.writeFileSync(OUTPUT_PATH, m3u);
    console.log('- synced at ' + new Date());
  } catch (e) {
    console.error(e);
  }
}

function item2m3u(item: any): string {
  const entities = new Html5Entities();

  // 파일경로 강제변경(5호점 대응)
  if (item.path) {
    item.path = item.path.replace('D:/', '/Volumes/Seagate/');
  }

  const str =
    `#EXTVDJ:<filesize>0</filesize><artist>${entities.encode(item.artist)}</artist><title>${entities.encode(
      item.title
    )}</title><songlength>0</songlength>\n` + `${item.path || `${item._id}.mp3`}\n`;

  return str;
}
