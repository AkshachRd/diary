import {useNavigate} from "react-router-dom";

function useNavigateToMain(): () => void
{
    const navigate = useNavigate();
    const mainPath = "/";
    return () => navigate(mainPath);
}

function useNavigateToRecord(date: Date): () => void
{
    const navigate = useNavigate();
    const recordPath = `/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    return () => navigate(recordPath);
}

export {useNavigateToMain, useNavigateToRecord}