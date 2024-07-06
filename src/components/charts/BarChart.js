import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getTracksReleasedIn2023 } from '../../Api';

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    const fetchData = async () => {
      try {
        if (!token) {
          throw new Error('No access token available');
        }

        const tracks = await getTracksReleasedIn2023(token);

        if (tracks && tracks.length > 0) {
          const trackNames = tracks.map(track => track.name);
          const trackPopularity = tracks.map(track => track.popularity);

          setChartData({
            labels: trackNames,
            datasets: [
              {
                label: 'Popularity',
                data: trackPopularity,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
              },
            ],
          });

          setLoading(false);
        } else {
          setError('No tracks found for the specified criteria.');
          setLoading(false);
        }
      } catch (error) {
        setError('Error fetching tracks. Please try again later.');
        console.error('Error fetching tracks:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-white text-2xl font-semibold mb-4">Bar Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
