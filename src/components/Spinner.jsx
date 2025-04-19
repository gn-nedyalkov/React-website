import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    
}

const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color='#36d7b7'
            loading={loading}
            cssOverride = {override}
        />
    )
}

export default Spinner