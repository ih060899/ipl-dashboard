import { useState, useEffect } from 'react';
import TeamTile from '../components/TeamTile';
import './HomePage.scss';
import Loader from 'react-loader-spinner';

const HomePage = () => {
    const [teams, setTeams] = useState([]);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        const fetchAllTeams = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_ROOT_URL}/team`
            );
            const data = await response.json();
            setTeams(data);
            setIsPending(false);
        };
        fetchAllTeams();
    }, []);
    return (
        <div className='HomePage'>
            <div className='header-section'>
                <h1 className='app-name'>IPL Dashboard</h1>
                {isPending && (
                    <Loader
                        className='loading'
                        type='Grid'
                        color='white'
                        height={300}
                        width={300}
                    />
                )}
            </div>
            <div className='team-grid'>
                {teams.map(team => (
                    <TeamTile key={team.id} teamName={team.teamName} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
