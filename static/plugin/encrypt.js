import Crpyto from 'jsencrypt'
import pk from './PK'
const PK = pk.PK

function encrypt(data) {
  let crypt = new Crypto()
  crypt.setPublicKey(PK)

  return crypt.encrypt(data)
}


export default {
  encrypt
}