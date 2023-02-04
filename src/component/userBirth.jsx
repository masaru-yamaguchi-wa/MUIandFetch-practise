export const UserBirth = (props) => {
    return (
        <>
            <p>Age:{props.userbirth.age}  Birth:{props.userbirth.date.slice(0, 10)}</p>
        </>
    )
}