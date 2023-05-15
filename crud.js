// CRUD JavaScript Básico: 

const miniTwitter = {
    usuario: [{
        username: "LucasMachado"
    }],
    posts: [{
        id: 1,
        owner: "LucasMachado",
        content: "Minha primeira postagem"
    }]
}

// CREATE 

function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })

}
criaPost({ owner: 'LucasMachado', content: "Meu segundo post" })
criaPost({ owner: 'LucasMachado', content: "Meu terceio post" })
console.table(miniTwitter.posts)

//READ
function readPost() {
    return miniTwitter.posts
}
console.table(readPost())

//UPDATE 
function atualizaContentPost(id, novoConteudo) {
    const postQueSeraAtualizado = readPost().find((post) => {
        return post.id === id
    })
    console.log(postQueSeraAtualizado)
    postQueSeraAtualizado.content = novoConteudo
}
atualizaContentPost(2, "Novo conteúdo do post")
console.table(readPost())

//DELETE

function deletePost(id) {
    const listaDePostsAtualizada = readPost().filter((postAtual) => {
        return postAtual.id !== id
    })
    miniTwitter.posts = listaDePostsAtualizada
}

deletePost(1)
deletePost(2)
deletePost(3)

console.table(readPost())



//REFERÊNCIA: https://www.youtube.com/watch?v=5I4W0Mtcfqo&t=1s&ab_channel=MarioSouto-DevSoutinho