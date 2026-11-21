# Guerra dos Mil Povos — JRPG 2D-HD

Protótipo jogável de um JRPG em estilo **2D-HD** (na linha de *Octopath Traveler* e *Live A Live*) que roda direto no navegador. O jogo é inspirado no livro **"Guerra dos Mil Povos"**, de Víktor Waewell.

A história se passa no Brasil do século XVI, durante a **Confederação dos Tamoios**, entre a Baía de Guanabara e Santos.

## O intuito

O projeto quer mostrar como seria uma adaptação do livro para um JRPG moderno e servir de base para uma versão maior, possivelmente no **RPG Maker**. Por isso todos os dados do jogo ficam separados do código, em blocos JSON:

- personagens, habilidades, itens e equipamentos;
- inimigos;
- diálogos;
- mapas;
- trilha sonora.

Assim o conteúdo pode ser migrado ou editado sem mexer na engine.

## O grupo

- **Afonso**, Espadachim Diplomata: um europeu que muda de lado.
- **Aiyra**, Caçadora da Mata: arco, armadilhas e conhecimento da floresta.
- **Kaiyke**, Guerreiro Tamoio: força bruta com o tacape.
- **Heloísa**, Estrategista e Alquimista Colonial: táticas, remédios e as "granadas" de colmeia.

## O que tem no jogo

- **Prólogo cinematográfico** na praia e exploração da aldeia e da trilha da mata.
- **Exploração** com o grupo em fila, baús, NPCs e encontros aleatórios.
- **Batalhas por turnos** com:
  - barra de iniciativa;
  - escudos e fraquezas, com **Break** ao zerar o escudo do inimigo;
  - pontos de **Impulso (Boost)** acumulados por turno.
- **Batalha naval** na Baía de Guanabara, com:
  - igaras contra naus portuguesas;
  - flechas de fogo e colmeias;
  - ordens de frota;
  - o chefe Capitão Fidalgo, em duas fases.
- **Visual 2D-HD**:
  - pixel art gerada por código;
  - iluminação dinâmica e bloom;
  - profundidade de campo (tilt-shift) e sombras.
- **Áudio procedural** com Web Audio:
  - flauta indígena, violão ibérico, maracá e tambor;
  - ambiências e efeitos sonoros.
- **Equipamentos e loja**:
  - menu de equipamentos com prévia de atributos;
  - loja e bestiário.
- **Save automático** e créditos finais com nota histórica.

Todo o texto do jogo está em português (PT-BR).

## Como jogar

O jogo inteiro está em um único arquivo: basta abrir o **`index.html`** no navegador (Chrome, Edge ou Firefox).

Se o navegador bloquear o arquivo local, sirva a pasta assim:

```bash
python3 -m http.server 8000
# e acesse http://localhost:8000
```

### Controles

| Ação | Teclas |
|---|---|
| Mover | Setas / WASD |
| Correr | Shift |
| Confirmar / interagir | Z / Enter / Espaço |
| Cancelar | X / Esc |
| Menu | C / Tab |
| Impulso (Boost) + / − | E / Q |
| Som liga/desliga | M |

## Estrutura do projeto

```
index.html     ← jogo pronto (gerado)
build.sh       ← junta os módulos de src/ em index.html
src/
  01_head.html          CSS e estrutura da página
  02_data.html          dados: sistema, atores, skills, itens, equipamentos
  02b_battle_data.html  dados: inimigos, skills inimigas, tropas
  02c_audio_data.html   dados: trilhas sonoras
  03_dialogs.html       árvores de diálogo
  04_maps.html          mapas em ASCII e eventos
  05_sprites.html       pixel art procedural
  06_engine.html        renderização, input, UI, scripts
  07_side.html          cenas laterais (prólogo)
  08_field.html         exploração
  09_battle.html / 09b_battle.html   sistema de batalha
  10_naval.html         campanha naval
  11_audio.html         motor de áudio
  12_polish.html        menu, loja, save, créditos, ganchos de som
  99_boot.html          tela de título e loop principal
```

Depois de editar qualquer arquivo em `src/`, rode:

```bash
./build.sh
```

## Aviso

Este é um projeto de fã, sem fins comerciais. A obra *"Guerra dos Mil Povos"* e seus personagens pertencem a Víktor Waewell. Alguns personagens secundários e falas são criações deste protótipo.
