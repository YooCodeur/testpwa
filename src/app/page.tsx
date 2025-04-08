import Image from 'next/image';

export default function Home() {
  return (
    <div className="global" style={{ backgroundColor: '#F4F5F6' }}>
      <div>
        <Image 
          src="/images/history-in-hd-cTz5-T7voqQ-unsplash.jpg" 
          alt="Image historique"
          width={800}
          height={600}
          priority
        />
      </div>
    </div>
  );
}
