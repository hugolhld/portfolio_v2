const Cylinder = () => {

    const arrColor = ['black', 'grey', 'blue', 'grey', 'green']



    return (
        <mesh>
            <cylinderGeometry args={[10, 10]} />
            <meshBasicMaterial color={'black'} />
        </mesh>
    )
}

export default Cylinder