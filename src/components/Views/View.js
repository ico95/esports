import { useViewContext } from "../contexts/viewContext";
import DefaultView from './DefaultView';
import EventView from './EventView';

let View = () => {
    const { viewMode } = useViewContext();

    return (
        <>
            {viewMode === "default" ? <DefaultView /> : <EventView /> }
        </>
    );
};

export default View;