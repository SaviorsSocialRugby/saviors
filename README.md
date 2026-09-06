# Saviors Social Rugby 🏉

SAVIORS ON FIRE 🔥🔥🔥

## Utilizzo

1. `git clone https://github.com/SaviorsSocialRugby/saviors.git` oppure modificare direttamente il file da web
2. appena effettuato il push su `main` o salvato il file da web automaticamente viene eseguita una [action](https://github.com/features/actions) per effettuare il deploy tramite [GitHub Pages](https://pages.github.com/)
3. puoi monitorare lo stato del deploy da [questa pagina](https://github.com/SaviorsSocialRugby/saviors/actions)

### In locale

1. Installa [Hugo](https://gohugo.io/installation/); il motore che genera le pagine HTML
2. Installa [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git); il tool per "caricare" i file sul repoistory che mantiene il codice sorgente
3. Da un terminale `git clone https://github.com/SaviorsSocialRugby/saviors.git` per "scaricare" il sorgente
   1. `cd saviors`
   2. `hugo server -D -e production --minify --log --disableFastRender`
   3. aprire il link `http://localhost:1313/` su un browser per vedere i cambiamenti
4. Usando un editor di testo (VSCode, Sublime, Notepad, etc.) cambiare il contenuto delle pagine e vedere i cambiamenti sulla pagina del browser aperta al punto `1.3`
5. Completate le modifiche `git add -A; git commit -m 'update'; git push origin main`

#### Tema

Il tema è [Blowfish](https://blowfish.page/), caricato come [Hugo Module](https://gohugo.io/hugo-modules/) (vedi `go.mod`) - non serve clonare nessun repository a parte, `hugo` scarica automaticamente la versione giusta la prima volta che lanci `hugo server` o `hugo --minify`.

Per aggiornare il tema all'ultima versione:

```sh
hugo mod get -u github.com/nunocoracao/blowfish/v3
hugo mod tidy
```

## Guide

- [Hugo - Quick Start](https://gohugo.io/getting-started/quick-start/)
- [Git](https://docs.github.com/en/get-started/quickstart)
- [Blowfish](https://blowfish.page/docs/) (tema per Hugo)
