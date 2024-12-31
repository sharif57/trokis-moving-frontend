import { BellDot } from 'lucide-react';
import Link from 'next/link';

export default function UserNotifications() {
  // Simulated data for notifications (in real apps, fetch this data from an API)
  const notifications = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    message: 'Your Shipment is delivered by driver, please confirm it first.',
  }));

  return (
    <div className="bg-gray-50 p-4 lg:w-1/2 mx-auto sm:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center gap-4 p-4 border-b">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
            <BellDot className="text-black" />
          </div>
          <p className="text-gray-800 text-sm sm:text-base">
            You have {notifications.length} new notifications.
          </p>
        </div>

        {/* Notification List */}
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <Link href={`/user/userNotifications/${notification.id}`} key={notification.id}>
              <div>
                <div className="flex items-center gap-4 p-4 hover:bg-gray-100 transition">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    <BellDot className="text-black" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {notification.message}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
