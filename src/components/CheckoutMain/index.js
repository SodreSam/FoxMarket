import React from 'react';
import { FiShoppingBag, FiPlusCircle, FiMinusCircle, FiArrowLeftCircle } from 'react-icons/fi';

import  {Link} from 'react-router-dom';

import './styles.css';

import agua from '../../assets/agua.png';


export default function CheckoutMain () {


	const storagedProducts = JSON.parse(localStorage.getItem("Products")) || [];
	console.log(storagedProducts);

    return (
		
        <main className='page-content'>
		<Link to="/" className="arrow-back">
        <FiArrowLeftCircle size={35} color="#fff" />
      	</Link>
	        <section className='checkout'>
		
		    <header>

    			<h1>Finalizar pedido</h1>
                
                <hr/>
		    </header>
		
		<section className='store-info'>

			<picture className='icon'>

				<FiShoppingBag size={100} />
                <h2>FoxMarket</h2>
			</picture>

			<section className='details'>

				
                <h3>Revise os seus itens antes de enviar a solicitação de compra.</h3> <br/>
				<time>Você ainda tem 09:54:12 restantes para concluir sua compra</time>

			</section>
		</section>
		
		<form>
			
			
			<ul className='item-list'>
				<div className="scroll">

					{storagedProducts.map((item) => (
						<div key={item.id} className='item'>
							<item-component>
								<increment-decrement>
									<button>-</button>
									<span> {item.count} </span>
									<button>+</button>
								</increment-decrement>
								<h4 className="itemm"><img src={item.image} alt="agua" />{item.name}</h4>
								<span className='price'>R$ {item.price}</span>	
							</item-component>
						</div>
					))}
						<br/>

			</div>

			<br/>
			<hr/>
			<div>
				<item-component>
				<h2>Total</h2>
				<span className='price'>R$ {storagedProducts.reduce((a, b) => a + (b.price * (b.count||1)), 0)}</span>
				</item-component>
			</div>
			</ul>
			
			
		</form>

			<footer>
				<button type='submit'>Finalizar compra</button>
			</footer>

	</section>

    </main>

);
}