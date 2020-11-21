import React from 'react';
import { FiShoppingBag, FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

import './styles.css';

import agua from '../../assets/agua.png';

import CheckoutList from '../CheckoutList';

export default function CheckoutMain () {

    return (

        <main className='page-content'>

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
				<div className='item'>
					<item-component>
						<increment-decrement>
							<button><FiMinusCircle/></button>
							<span>N</span>
							<button><FiPlusCircle/></button>
						</increment-decrement>
						<h4 className="itemm"><img src={agua} alt="agua" />Água sem Gás</h4>
						<span className='price'>R$500,00</span>	
					</item-component>
				</div>
				
				<div className='item'>
				<item-component>
						<increment-decrement>
							<button><FiMinusCircle/></button>
							<span>N</span>
							<button><FiPlusCircle/></button>
						</increment-decrement>
						<h4 className="itemm"><img src={agua} alt="agua" />Água sem Gás</h4>
						<span className='price'>R$500,00</span>	
					</item-component>

				</div>
				<br/>
                <div className='item'>
				<item-component>
						<increment-decrement>
							<button><FiMinusCircle/></button>
							<span>N</span>
							<button><FiPlusCircle/></button>
						</increment-decrement>
						<h4 className="itemm"><img src={agua} alt="agua" />Água sem Gás</h4>
						<span className='price'>R$500,00</span>	
					</item-component>
				</div>

			<br/>
			<hr/>
			<div>
				<item-component>
				<h2>Total</h2>
				<span className='price'> R$1500,00</span>
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