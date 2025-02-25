import ListarProdutos from "../../components/produtos/listarprodutos/ListarProdutos"
import ModalProduto from "../../components/produtos/modalprodutos/ModalProduto"

function Home() {
    return (
        <>
            <div className="bg-blue-950 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo(a)!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra Medicamentos e Cosméticos!💊
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='flex justify-around gap-4'
                                >
                                <ModalProduto />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/m1iwfxqae/performance_goal_3/Pharmacist-rafiki.svg?updatedAt=1740486250672"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListarProdutos />
        </>
    )
}

export default Home