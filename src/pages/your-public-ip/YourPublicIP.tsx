import { useEffect, useState } from 'react';

// Ajustamos a interface para os campos do ipinfo.io
interface IpData {
    ip: string;
    city: string;
    region: string; // Estado
    country: string; // Sigla do País
    org: string;    // Provedor
    timezone: string;
}

const YourPublicIP = () => {
    const [networkData, setNetworkData] = useState<IpData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLocationData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://ipinfo.io/json?token=24bf84b6077c11');

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                const data = await response.json();
                setNetworkData(data);
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
                setError("Não foi possível carregar os dados. Verifique se o seu AdBlocker está desativado.");
            } finally {
                setLoading(false);
            }
        };

        fetchLocationData();
    }, []);

    if (loading) return <div className='card m-10'><p>Buscando sua localização...</p></div>;

    if (error) return <div className='card m-10' style={{ color: 'red' }}><p>{error}</p></div>;

    return (
        <div className='card m-10 w-100 p-4'>
            <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>📍 Dados da Rede</h2>

            {
                networkData ? (
                    <div style={{ marginTop: '15px' }}>
                        <p><strong>🌐 IP Público:</strong> {networkData.ip}</p>
                        <p><strong>🏢 Provedor:</strong> {networkData.org}</p>
                        <hr style={{ margin: '15px 0', border: '0', borderTop: '1px solid #eee' }} />
                        <p><strong>🏙️ Cidade:</strong> {networkData.city}</p>
                        <p><strong>🗺️ Estado:</strong> {networkData.region}</p>
                        <p><strong>🇧🇷 País:</strong> {networkData.country}</p>
                        <p><strong>🕒 Fuso Horário:</strong> {networkData.timezone}</p>
                    </div>
                ) : (
                    <p>Dados indisponíveis.</p>
                )
            }
        </div >
    );
};

export default YourPublicIP;