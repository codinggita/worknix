import React, { useState } from 'react';
import { Plus, Mail, Phone, X } from 'lucide-react';

function Teams() {
  const [teams, setTeams] = useState([
    {
      name: 'Development Team',
      members: [
        { name: 'John Doe', role: 'Team Lead', email: 'john@example.com', phone: '+1 234 567 890' },
        { name: 'Sarah Smith', role: 'Senior Developer', email: 'sarah@example.com', phone: '+1 234 567 891' },
        { name: 'Mike Johnson', role: 'Developer', email: 'mike@example.com', phone: '+1 234 567 892' }
      ]
    },
    {
      name: 'Design Team',
      members: [
        { name: 'Emma Wilson', role: 'Design Lead', email: 'emma@example.com', phone: '+1 234 567 893' },
        { name: 'Alex Brown', role: 'UI Designer', email: 'alex@example.com', phone: '+1 234 567 894' }
      ]
    }
  ]);

  const [showAddMember, setShowAddMember] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    email: '',
    phone: ''
  });

  const handleAddMember = (teamIndex) => {
    setSelectedTeam(teamIndex);
    setShowAddMember(true);
  };

  const handleSubmitMember = (e) => {
    e.preventDefault();
    if (selectedTeam !== null) {
      const updatedTeams = [...teams];
      updatedTeams[selectedTeam].members.push(newMember);
      setTeams(updatedTeams);
      setShowAddMember(false);
      setNewMember({ name: '', role: '', email: '', phone: '' });
    }
  };

  const handleRemoveMember = (teamIndex, memberIndex) => {
    const updatedTeams = [...teams];
    updatedTeams[teamIndex].members.splice(memberIndex, 1);
    setTeams(updatedTeams);
  };

  return (
    <div className="mt-7 ml-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Teams</h1>
        <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Create Team
        </button>
      </div>

      <div className="space-y-8">
        {teams.map((team, teamIndex) => (
          <div key={teamIndex} className="bg-white rounded-lg shadow-sm overflow-hidden mt-7">
            <div className="p-6 border-b flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{team.name}</h2>
                <p className="text-gray-600 mt-1">{team.members.length} members</p>
              </div>
              <button
                onClick={() => handleAddMember(teamIndex)}
                className="flex items-center px-3 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Member
              </button>
            </div>

            <div className="divide-y">
              {team.members.map((member, memberIndex) => (
                <div key={memberIndex} className="p-6 flex items-center justify-between mt-7">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="text-lg font-medium text-teal-800">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-teal-600">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href={`tel:${member.phone}`} className="text-gray-600 hover:text-teal-600">
                      <Phone className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => handleRemoveMember(teamIndex, memberIndex)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;