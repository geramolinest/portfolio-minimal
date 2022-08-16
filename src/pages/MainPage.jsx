import { AboutMe, LinkeTree, Stack } from "./Index";

const MainPage = () => {
    return (
        <div className='root-container-page'>
            <LinkeTree/>
            <AboutMe/>
            <Stack/>
        </div>
    );
}

export default MainPage;
