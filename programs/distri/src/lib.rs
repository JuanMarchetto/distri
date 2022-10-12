use anchor_lang::{
    prelude::*,
};

declare_id!("NXWBTWj6tHwbhkfEX2UREh9JBSzaKKABk4br8hztKpT");

#[program]
pub mod distri {
    use super::*;

    pub fn create_agreement(
        ctx: Context<CreateAgreement>,
        name: String,
        members: Vec<Member>,
    ) -> Result<()> {
        let agreement = &mut ctx.accounts.agreement;

        agreement.name = name;
        agreement.members = members;
        agreement.treasury = *ctx.accounts.treasury.key;
        agreement.status = "INITIALIZED".to_string();

        msg!(
            "Agreement {:#?} Created!",
            agreement.name
        );

        Ok(())
    }

}

#[derive(Accounts)]
pub struct CreateAgreement<'info> {
    #[account(
        init,
        payer = initializer,
        space = 9000
    )]
    pub agreement: Account<'info, Agreement>,
    /// CHECK:
    pub treasury: AccountInfo<'info>,
    #[account(mut)]
    pub initializer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Agreement {
    pub name: String,
    pub treasury: Pubkey,
    pub members: Vec<Member>,
    pub status: String,
}

#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct Member {
    pubkey: Pubkey,
    ratio: u16,
}
