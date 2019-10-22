export const rpcContractResponse = { "manager": "tz1LWub69XbTxdatJnBkm7caDQoybSgW4T3s", "balance": "180227765", "spendable": true, "delegate": { "setable": true, "value": "tz1LWub69XbTxdatJnBkm7caDQoybSgW4T3s" }, "script": { "code": [{ "prim": "parameter", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "key_hash" }], "annots": ["%_Liq_entry_play"] }, { "prim": "or", "args": [{ "prim": "nat", "annots": ["%_Liq_entry_finish"] }, { "prim": "unit", "annots": ["%_Liq_entry_fund"] }] }], "annots": [":_entries"] }] }, { "prim": "storage", "args": [{ "prim": "pair", "args": [{ "prim": "option", "args": [{ "prim": "pair", "args": [{ "prim": "nat", "annots": ["%number"] }, { "prim": "pair", "args": [{ "prim": "mutez", "annots": ["%bet"] }, { "prim": "key_hash", "annots": ["%player"] }] }], "annots": [":game"] }], "annots": ["%game"] }, { "prim": "address", "annots": ["%oracle_id"] }], "annots": [":storage"] }] }, { "prim": "code", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR", "annots": ["@storage_slash_1"] }]] }, { "prim": "CAR", "annots": ["@parameter_slash_2"] }, { "prim": "DUP", "annots": ["@parameter"] }, { "prim": "IF_LEFT", "args": [[{ "prim": "RENAME", "annots": ["@_number_player_slash_3"] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@storage"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], [{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }], { "prim": "CAR", "annots": ["@number"] }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "100" }] }, [{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@number"] }]] }, { "prim": "SWAP" }], { "prim": "COMPARE" }, { "prim": "GT" }, { "prim": "IF", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "number must be <= 100" }] }, { "prim": "FAILWITH" }], [{ "prim": "UNIT" }]] }, { "prim": "DROP" }, { "prim": "PUSH", "args": [{ "prim": "mutez" }, { "int": "0" }] }, { "prim": "AMOUNT" }, { "prim": "COMPARE" }, { "prim": "EQ" }, { "prim": "IF", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "bet cannot be 0tz" }] }, { "prim": "FAILWITH" }], [{ "prim": "UNIT" }]] }, { "prim": "DROP" }, { "prim": "BALANCE" }, { "prim": "AMOUNT" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "2" }] }, { "prim": "MUL" }, { "prim": "COMPARE" }, { "prim": "GT" }, { "prim": "IF", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "I don't have enough money for this bet" }] }, { "prim": "FAILWITH" }], [{ "prim": "UNIT" }]] }, { "prim": "DROP" }, [{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@storage"] }]] }, { "prim": "SWAP" }], { "prim": "CAR", "annots": ["%game"] }, { "prim": "IF_NONE", "args": [[[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@storage"] }]] }, { "prim": "SWAP" }], { "prim": "CDR", "annots": ["%oracle_id"] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], { "prim": "CDR", "annots": ["@player"] }, { "prim": "AMOUNT", "annots": ["@bet"] }, { "prim": "PAIR", "annots": ["%bet", "%player"] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@number"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], { "prim": "PAIR", "annots": ["%number"] }, { "prim": "SOME" }, { "prim": "PAIR", "annots": ["@storage", "%game", "%oracle_id"] }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "PAIR" }], [{ "prim": "DUP", "annots": ["@g"] }, { "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "Game already started with" }] }, { "prim": "PAIR" }, { "prim": "FAILWITH" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }, { "prim": "DROP" }, { "prim": "DROP" }]] }], [{ "prim": "IF_LEFT", "args": [[{ "prim": "RENAME", "annots": ["@random_number_slash_10"] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@storage"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], { "prim": "DUP", "annots": ["@storage"] }, { "prim": "CDR", "annots": ["%oracle_id"] }, { "prim": "SENDER" }, { "prim": "COMPARE" }, { "prim": "NEQ" }, { "prim": "IF", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "Random numbers cannot be generated" }] }, { "prim": "FAILWITH" }], [{ "prim": "UNIT" }]] }, { "prim": "DROP" }, { "prim": "DUP", "annots": ["@storage"] }, { "prim": "CAR", "annots": ["%game"] }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "No game already started" }] }, { "prim": "FAILWITH" }], [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@storage"] }]] }, { "prim": "SWAP" }], { "prim": "CDR", "annots": ["%oracle_id"] }, { "prim": "NONE", "args": [{ "prim": "pair", "args": [{ "prim": "nat", "annots": ["%number"] }, { "prim": "pair", "args": [{ "prim": "mutez", "annots": ["%bet"] }, { "prim": "key_hash", "annots": ["%player"] }] }], "annots": [":game"] }] }, { "prim": "PAIR", "annots": ["@storage", "%game", "%oracle_id"] }, [{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@game"] }]] }, { "prim": "SWAP" }], { "prim": "CAR", "annots": ["%number"] }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "101" }] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@random_number"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "UNIT" }, { "prim": "FAILWITH" }], [{ "prim": "CDR", "annots": ["@r"] }]] }, { "prim": "RENAME", "annots": ["@random_number"] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[{ "prim": "NIL", "args": [{ "prim": "operation" }] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@game"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], [{ "prim": "CDR" }, { "prim": "CDR", "annots": ["%player"] }], { "prim": "IMPLICIT_ACCOUNT" }, { "prim": "PUSH", "args": [{ "prim": "mutez" }, { "int": "1" }] }, { "prim": "UNIT" }, { "prim": "TRANSFER_TOKENS" }, { "prim": "CONS" }], [{ "prim": "NIL", "args": [{ "prim": "operation" }] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@game"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], [{ "prim": "CDR" }, { "prim": "CDR", "annots": ["%player"] }], { "prim": "IMPLICIT_ACCOUNT" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "100" }] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@game"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], { "prim": "CAR", "annots": ["%number"] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@game"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], [{ "prim": "CDR" }, { "prim": "CAR", "annots": ["%bet"] }], { "prim": "MUL" }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mutez" }, { "int": "0" }] }], [{ "prim": "CAR", "annots": ["@g"] }]] }, { "prim": "RENAME", "annots": ["@gain"] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP", "annots": ["@game"] }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], [{ "prim": "CDR" }, { "prim": "CAR", "annots": ["%bet"] }], { "prim": "ADD", "annots": ["@reimbursed"] }, { "prim": "UNIT" }, { "prim": "TRANSFER_TOKENS" }, { "prim": "CONS" }]] }, [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DROP" }]] }]] }], { "prim": "RENAME", "annots": ["@ops"] }, { "prim": "PAIR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }, { "prim": "DROP" }]] }], [{ "prim": "DROP" }, [{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }], { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "PAIR" }]] }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }, { "prim": "DROP" }]] }]] }], "storage": { "prim": "Pair", "args": [{ "prim": "None" }, { "string": "tz1Zwusa1tLQHRyB1KL1p44KjgDbi5KjNKay" }] } }, "counter": "2" }

export const storage = rpcContractResponse.script.code.find(
    x => x.prim === 'storage'
)!.args[0] as any;