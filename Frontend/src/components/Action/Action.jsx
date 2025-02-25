import { useState, useRef } from 'react';
import { Search, Camera } from 'lucide-react';
import { Modal } from './Modal';
import { QuickConnections } from './QuickConnections';
import { TimeOffRequests } from './TimeOffRequests';
import { EmployeeAccessLogins } from './EmployeeAccessLogins';
import { Assets } from './Assets';
import NavigationBar from '../Common/NavigationBar';


function Action() {


  const [activeModal, setActiveModal] = useState(null);
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [postType, setPostType] = useState('all');
  const [attendanceType, setAttendanceType] = useState('office');
  const [location, setLocation] = useState(null);
  const videoRef = useRef(null);
  const [photoData, setPhotoData] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  
  

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const photo = canvas.toDataURL('image/jpeg');
        setPhotoData(photo);
        setShowCamera(false);
        const stream = videoRef.current.srcObject;
        stream?.getTracks().forEach(track => track.stop());
      }
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(res => res.json())
            .then(data => {
              setLocation(data.display_name);
            })
            .catch(err => {
              console.error('Error getting location:', err);
              setLocation('Location not available');
            });
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('Location not available');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }
  };

  const PostTypeSelector = () => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Post To
      </label>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="all"
            checked={postType === 'all'}
            onChange={(e) => setPostType(e.target.value)}
            className="text-teal-600"
          />
          <span>All Communities</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="selected"
            checked={postType === 'selected'}
            onChange={(e) => setPostType(e.target.value)}
            className="text-teal-600"
          />
          <span>Selected Communities</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="post"
            checked={postType === 'post'}
            onChange={(e) => setPostType(e.target.value)}
            className="text-teal-600"
          />
          <span>Post</span>
        </label>
      </div>
      {postType === 'selected' && (
        <div className="mt-2">
          <select 
            multiple 
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={selectedCommunities}
            onChange={(e) => setSelectedCommunities(Array.from(e.target.selectedOptions, option => option.value))}
          >
            <option value="engineering">Engineering</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="hr">HR</option>
          </select>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuickConnections onActionClick={setActiveModal} />
          <TimeOffRequests />
          <EmployeeAccessLogins />
          <Assets />
        </div>

        {/* Modals */}
        {activeModal === 'addMember' && (
          <Modal title="Add Team Member" onClose={() => setActiveModal(null)}>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search members..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </Modal>
        )}

        {activeModal === 'createPoll' && (
          <Modal title="Create New Poll" onClose={() => setActiveModal(null)}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Poll Question
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your question"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Options
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Option 1"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Option 2"
                  />
                </div>
              </div>
              <PostTypeSelector />
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Create Poll
              </button>
            </div>
          </Modal>
        )}

        {activeModal === 'requestOvertime' && (
          <Modal title="Request Overtime" onClose={() => setActiveModal(null)}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Time
                  </label>
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Submit Request
              </button>
            </div>
          </Modal>
        )}

        {activeModal === 'makeAnnouncement' && (
          <Modal title="Make Announcement" onClose={() => setActiveModal(null)}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Announcement title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows={4}
                  placeholder="Enter your announcement"
                ></textarea>
              </div>
              <PostTypeSelector />
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Post Announcement
              </button>
            </div>
          </Modal>
        )}

        {activeModal === 'leaveRequest' && (
          <Modal title="Submit Leave Request" onClose={() => setActiveModal(null)}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Leave Type
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="full">Full Day</option>
                  <option value="half">Half Day</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    From Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    To Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Submit Request
              </button>
            </div>
          </Modal>
        )}

        {activeModal === 'attendance' && (
          <Modal title="Mark Attendance" onClose={() => {
            setActiveModal(null);
            setPhotoData(null);
            setShowCamera(false);
            if (videoRef.current?.srcObject) {
              const stream = videoRef.current.srcObject;
              stream.getTracks().forEach(track => track.stop());
            }
          }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attendance Type
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="office"
                      checked={attendanceType === 'office'}
                      onChange={(e) => setAttendanceType(e.target.value)}
                      className="text-teal-600"
                    />
                    <span>Work from Office</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="wfh"
                      checked={attendanceType === 'wfh'}
                      onChange={(e) => setAttendanceType(e.target.value)}
                      className="text-teal-600"
                    />
                    <span>Work from Home</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in Time
                  </label>
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    defaultValue={new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out Time
                  </label>
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-lg bg-gray-50"
                    value={location || ''}
                    readOnly
                    placeholder="Click to detect location"
                  />
                  <button
                    onClick={getLocation}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Detect
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photo Verification
                </label>
                {!showCamera && !photoData && (
                  <button
                    onClick={() => {
                      setShowCamera(true);
                      startCamera();
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
                  >
                    <Camera className="w-5 h-5" />
                    <span>Take Photo</span>
                  </button>
                )}
                {showCamera && (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full rounded-lg"
                    />
                    <button
                      onClick={capturePhoto}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Capture
                    </button>
                  </div>
                )}
                {photoData && (
                  <div className="relative">
                    <img
                      src={photoData}
                      alt="Captured photo"
                      className="w-full rounded-lg"
                    />
                    <button
                      onClick={() => {
                        setPhotoData(null);
                        setShowCamera(true);
                        startCamera();
                      }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Retake
                    </button>
                  </div>
                )}
              </div>

              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Mark Attendance
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Action;