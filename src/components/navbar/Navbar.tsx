import { Link } from "react-router-dom"
import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <div className="flex justify-center w-full py-4 text-white bg-blue-800">
				<div className="container flex items-center justify-between mx-4 text-lg">
					<Link className="flex place-items-center" to="/home">
						<img
							src="https://ik.imagekit.io/m1iwfxqae/performance_goal_3/favicon.png?updatedAt=1740486525788"
							alt="Logo - Farmácia"
							className="w-12 mr-1.5"
						/>
						<p>Farmácia</p>
					</Link>

					<div className="relative flex items-center justify-center w-2/5 text-black">
						<form 
							className="flex items-center justify-center w-full"
						>
							<input
								className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
								type="search"
								placeholder="Procurar produto"
								id="busca"
								name="busca"
								required
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700"
							>
								<MagnifyingGlass
									size={14}
									weight="bold"
								/>
							</button>
						</form>
					</div>

					<div className="flex items-center gap-4 py-4">
						<Link
							to="/produtos" className="hover:underline">
							Produtos
						</Link>
						<Link
							to="/categorias" className="hover:underline">
							Categorias
						</Link>
						<Link
							to="/cadastrarcategoria" className="hover:underline">
							Cadastrar Categoria
						</Link>
							<User
								size={32}
								weight="bold"
							/>

							<ShoppingCart
								size={32}
								weight="bold"
							/>
					</div>
				</div>
			</div>
        </>
    )
}

export default Navbar