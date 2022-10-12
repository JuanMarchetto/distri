import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Distri } from "../target/types/distri";
import { PublicKey, SystemProgram} from "@solana/web3.js"

describe("We Create an Agreement", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Distri as Program<Distri>;

  it("Creating an Agreement...", async () => {
    const agreement = anchor.web3.Keypair.generate();
    const treasury = anchor.web3.Keypair.generate();
    const initializer = (program.provider as anchor.AnchorProvider).wallet;

    // We spect the ratios in a percentaje times 100 intiger representation,
    // for example: 11,25% will be 1125 in our case
    const members = [
      {
        pubkey: new PublicKey('5xot9PVkphiX2adznghwrAuxGs2zeWisNSxMW6hU6Hkj'),
        ratio: 5000,
      },
      {
        pubkey: new PublicKey('CUtKCTar8gb5VYCDWbX5yFMVrhbnod9aCNf4cfhD2qPK'),
        ratio: 5000,
      },
    ];

    const tx = await program.methods.createAgreement(
      "Great Pool!",
      members
    )
    .accounts({
      agreement: agreement.publicKey,
      treasury: treasury.publicKey,
      initializer: initializer.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .signers([agreement])
    .rpc();
    console.log(`https://explorer.solana.com/tx/${tx}?cluster=devnet`);
  });
});
