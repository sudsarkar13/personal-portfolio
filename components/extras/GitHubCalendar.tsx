import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface GitHubCalendarProps {
  username: string; // Define the expected type for 'username'
}

const GitHubCalendar: React.FC<GitHubCalendarProps> = ({ username }) => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const graphqlQuery = {
        query: `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          username,
        },
      };

      try {
        const response = await axios.post('https://api.github.com/graphql', graphqlQuery, {
          headers: {
            Authorization: `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`, // Replace with your GitHub Personal Access Token
          },
        });

        const contributionCalendar = response.data.data.user.contributionsCollection.contributionCalendar;
        setContributions(contributionCalendar.weeks);
      } catch (error) {
        console.error('Error fetching contribution data:', error);
      }
    };

    fetchContributions();
  }, [username]);

  // Render your calendar using the contributions data.
  // ...

  return (
    <div>
      {/* Calendar rendering logic goes here */}
    </div>
  );
};

export default GitHubCalendar;