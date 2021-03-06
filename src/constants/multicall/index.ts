import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_ADDRESS = '0x7cc33357FfCFaF6ac5CD66cEE1944B5d7AF9facB'
const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x1BdB91F9C153E5cd02E9867bABe97951E821D6F7',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.LOCAL]: MULTICALL_ADDRESS,
  [ChainId.NEONMAIN]: MULTICALL_ADDRESS,
  [ChainId.NEONDEV]: '0x1b5251EdDC73886B0A5bfbb1e85A65C3BD5381BB',
  [ChainId.NEONTEST]: MULTICALL_ADDRESS
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
