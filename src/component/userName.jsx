// import Grid from '@mui/material/Unstable_Grid2';
export const UserName = (props) => {
    return (
        <>
            <p>{props.username.title}. {props.username.first} {props.username.last}</p>
        </>
    )
}