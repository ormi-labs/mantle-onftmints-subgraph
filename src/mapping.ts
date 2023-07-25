import { ONFTMinted } from '../generated/UniChainsONFT721/UniChainsONFT721'
import { ONFTMint } from '../generated/schema'

export function handleONFTMinted(event: ONFTMinted): void {
  let mint = new ONFTMint(event.params.mintId.toHex())
  mint.minter = event.params.minter
  mint.referrer = event.params.referrer
  mint.mintId = event.params.mintId
  mint.referralEarnings = event.params.referralEarnings
  mint.protocolEarnings = event.params.protocolEarnings
  mint.save()
}
