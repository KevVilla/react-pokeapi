import React,{useEffect} from 'react'
import { connect } from 'react-redux';

import '../Home/Home.css'

import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';

import { getPokemon } from '../../Services/Pokemons';

import { setPokemon } from '../../Redux/Actions';

const mapStateToProps = state =>({
    list: state.list,
});
const mapDispatchToProps = dispatch =>({
    setPokemons: value => dispatch(setPokemon(value))
})

const Home = ({list,setPokemons}) => {

    useEffect(()=>{
        getPokemon().then(res=>{
            setPokemons(res.results)
        })
    })

  return (
    <div className='container--home'>
        <Header></Header>
        <main className='main-home--container container'>
            <section className='section-home--search'>
                <input className='home--search' type="text" placeholder='Encuentre a tu pokemon favorito'/>
            </section>
            <section className='section-home--pokemons'>
                <article className="home-pokemons--cardslist">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </article>
                <article className="home-pokemons--cardslist">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </article>
                <article className="home-pokemons--cardslist">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </article>
            </section>
        </main>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)