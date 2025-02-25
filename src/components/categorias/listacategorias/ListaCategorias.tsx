import { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria'
import { listar } from '../../../services/Service'
import CardCategorias from '../cardcategorias/CardCategorias'
import { DNA } from 'react-loader-spinner'

function ListaCategorias() {
	
    const [categorias, setCategorias] = useState<Categoria[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarCategorias() {
        setIsLoading(true)

        try{
            await listar('/categorias', setCategorias)
        }catch(error: any){
            console.log("Erro ao listar as Categorias!")
        }finally{
            setIsLoading(false)
        }
		
	}

	useEffect(() => {
		buscarCategorias()
	}, [categorias.length])

	return (
		<>
			{isLoading && (

				<DNA
					visible={true}
					height="200"
					width="200"
					ariaLabel="dna-loading"
					wrapperStyle={{}}
					wrapperClass="dna-wrapper mx-auto"
				/>
			)}
			<div className="flex justify-center w-full my-4">
				<div className="container flex flex-col mx-4">
					{ (!isLoading && categorias.length === 0) && (
						<span className="my-8 text-3xl text-center">
							Nenhuma categoria foi
							encontrada
						</span>
					)}

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{categorias.map((categoria: Categoria) => (
							<CardCategorias
								key={categoria.id}
								categoria={categoria}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListaCategorias