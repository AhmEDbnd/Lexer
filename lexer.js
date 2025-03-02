const fs = require('fs').promises;

const TOKEN_TYPES = [
    { name: 'Keywords', pattern: /^(program|const|var|begin|end|integer|reel|char|string|record|if|then|else|endif|Repeter|Jusqua)$/ },
    { name: 'AssignmentOperator', pattern: /^:=$/ },
    { name: 'OperateurLogique', pattern: /^(<>|>=|<=|=|>|<)$/ },
    { name: 'OperateurArithmétique', pattern: /^[+\-*/]$/ },
    { name: 'ConstanteChaine', pattern: /^(['"]).*?\1$/ },
    { name: 'ConstanteRéelle', pattern: /^\d+\.?\d*(e[+-]?\d+)?$/i },
    { name: 'ConstanteEntière', pattern: /^\d+$/ },
    { name: 'Symbols', pattern: /^[;,:().]$/ },
    { name: 'Identificateur', pattern: /^[a-zA-Z]\w*$/ },
];

const TOKEN_REGEX = /(\d+\.?\d*(e[+-]?\d+)?|['"].*?['"]|:=|<>|>=|<=|==|\+|\-|\*|\/|>|<|=|;|,|:|\(|\)|\.|(?<!\w)[a-zA-Z]\w)/g;

function identifyTokenType(token) {
    for (const { name, pattern } of TOKEN_TYPES) {
        if (pattern.test(token)) return name;
    }
    return 'Unrecognized';
}

function tokenize(line) {
    return line.match(TOKEN_REGEX) || [];
}

async function processFile() {
    try {
        const data = await fs.readFile('words.txt', 'utf8');
        const results = data.split(/\r?\n/)
            .flatMap(line => tokenize(line)
                .map(token => `${token} --> ${identifyTokenType(token)}`))
            .join('\n');
        
        await fs.writeFile('JETONS.txt', results);
        console.log('JETONS.txt created successfully');
    } catch (error) {
        console.error('File processing error:', error);
    }
}

processFile();