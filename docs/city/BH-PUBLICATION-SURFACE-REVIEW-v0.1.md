# BH Publication Surface Review v0.1 — MT-WEB-29-R4

## Resultado de revisão dos cinco achados

- `scripts/publication_gate.py`: gate local **deny-all**; mantido.
- `scripts/publication_boundary.py`: escritor não implementado; parâmetro de injeção de gate removido da API pública. Ainda não há capacidade operacional de publicação.
- `scripts/test_publication_boundary.py`: grava somente em diretórios temporários nos testes; **não constitui caminho de publicação real**.
- `scripts/test_publication_gate.py`: testes de controle, não publicador.
- `src/components/GeoAtlas.tsx`: leitura externa de GeoJSON (`fetch`); não constitui escrita científica, mas apresenta risco de versão mutável do mapa.

## Proveniência cartográfica

O manifesto `BH-CARTOGRAPHY-PROVENANCE-v0.1.json` registra as URLs observadas no código.
**Nenhum arquivo geográfico foi baixado, fixado por SHA-256 ou licenciado nesta missão.**
A qualificação cartográfica é `UNPINNED_NOT_QUALIFIED`; a interface atual não foi modificada.
A futura qualificação exige capturar bytes reais, licença, versão, hash e substituição controlada da origem mutável; requer decisão independente.

## Limites da evidência

Auditoria estática limitada ao código local: não comprova proteção de Git pushes, Vercel, CI externo, nem futuras rotas de publicação. `GLOBAL_ENFORCEMENT=NOT_QUALIFIED`.
Registro científico automático: `DISABLED_BY_POLICY`. Nenhuma autorização de publicação está implícita.
