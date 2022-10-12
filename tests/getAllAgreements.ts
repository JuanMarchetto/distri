import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Distri } from "../target/types/distri";

describe("We get the Agreements", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Distri as Program<Distri>;

  it("Get all the Agreements!", async () => {
    const provider = anchor.getProvider();
    anchor.setProvider(provider);
    
    const agreements = await program.account.agreement.all()
    console.log(agreements)
  });
});
