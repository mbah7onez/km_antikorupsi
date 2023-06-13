import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
            Kemenkumham Muda
            <br className='max-md:hidden' />
            <span className='text-center'>Anti</span>
            <span className='text-red-700 text-center'> Korupsi</span>
            </h1>
            <p className='desc text-center'>
                Bagaimana cara kamu <b>melawan korupsi</b> atau <b>menolak gratifikasi</b> saat melaksanakan tugas ?
            </p>

            <Feed />
        </section>
    )
}

export default Home