# Saviors Social Rugby 🏉

SAVIORS ON FIRE 🔥🔥🔥

## Utilizzo

1. `git clone https://github.com/notdodo/saviors.git` oppure modificare direttamente il file da web
2. appena effettuato il push su `master` o salvato il file da web automaticamente viene eseguita una [action](https://github.com/features/actions) per effettuare il deploy tramite [GitHub Pages](https://pages.github.com/)
3. puoi monitorare lo stato del deploy da [questa pagina](https://github.com/notdodo/saviors/actions)

### In locale

1. Installa [Hugo](https://gohugo.io/installation/); il motore che genera le pagine HTML
2. Installa [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git); il tool per "caricare" i file sul repoistory che mantiene il codice sorgente
3. Da un terminale `git clone https://github.com/notdodo/saviors.git` per "scaricare" il sorgente
   1. `cd saviors`
   2. `hugo server -D -e production --minify --log --disableFastRender`
   3. aprire il link `http://localhost:1313/saviors/` su un browser per vedere i cambiamenti
4. Usando un editor di testo (VSCode, Sublime, Notepad, etc.) cambiare il contenuto delle pagine e vedere i cambiamenti sulla pagina del browser aperta al punto `1.3`
5. Completate le modifiche `git add -A; git commit -m 'update'; git push origin master`

## Guide

- [Hugo - Quick Start](https://gohugo.io/getting-started/quick-start/)
- [Git](https://docs.github.com/en/get-started/quickstart)
- [PaperMod](https://adityatelange.github.io/hugo-PaperMod/) (tema per Hugo)
