export type Distri = {
  "version": "0.1.0",
  "name": "distri",
  "instructions": [
    {
      "name": "createAgreement",
      "accounts": [
        {
          "name": "agreement",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "members",
          "type": {
            "vec": {
              "defined": "Member"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "agreement",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "members",
            "type": {
              "vec": {
                "defined": "Member"
              }
            }
          },
          {
            "name": "status",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Member",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "ratio",
            "type": "u16"
          }
        ]
      }
    }
  ]
};

export const IDL: Distri = {
  "version": "0.1.0",
  "name": "distri",
  "instructions": [
    {
      "name": "createAgreement",
      "accounts": [
        {
          "name": "agreement",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "members",
          "type": {
            "vec": {
              "defined": "Member"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "agreement",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "members",
            "type": {
              "vec": {
                "defined": "Member"
              }
            }
          },
          {
            "name": "status",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Member",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "ratio",
            "type": "u16"
          }
        ]
      }
    }
  ]
};
