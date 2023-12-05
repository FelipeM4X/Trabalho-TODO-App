const express = requeire("express")
const  exphbs  =  require ("express-handlebars" )

const aplicativo = express()

app.get ( '/' ,  ( requisição ,  resposta )  =>  {
    resposta . enviar ( "Olá, Mundo!" )

app.engine ('handlebars',exphbs.engine)
app.set ('view engine','handlebars')
})
app.get( '/',(requisicao, resposta )  =>  {
    resposta.send ( "Olá, Mundo!" )
    resposta.render('home')
} )


app.get( '/',(requisicao, resposta )  =>  {
    resposta.send ( "Olá, Mundo!" )
} )

app.listen( 3000 ,  ( )  =>  {
    console . log ( "Servidor rodando na porta 3000!" )
})
app.listen( 3000, ()  =>  {
    console.log ("Servidor rodando na porta 3000!")
})