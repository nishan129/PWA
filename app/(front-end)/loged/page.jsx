"use client"
import React, { useState } from 'react';
import { Truck, RotateCcw, AlertTriangle, Gift, Target, Settings, Phone, LogOut, LayoutDashboard } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Business = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [showNumber, setShowNumber] = useState(false);

    const handleButtonClick = () => {
        setShowNumber(true);
    };
    async function handleLogout() {
        await signOut({ redirect: false });
        router.push('/');
    }

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        router.push('/login'); // Redirect to login if not authenticated
        return null;
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.userInfo}>
                    <div style={styles.name}>{session?.user?.name || 'Username'}</div>
                    <div style={styles.email}>{session?.user?.email || 'user@example.com'}</div>
                </div>
                <div style={styles.icon}>
                    <AlertTriangle color="white" size={40} />
                </div>
            </div>
            <div style={styles.section}>
                <div style={styles.sectionTitle}>Manage Your Business</div>
                <div style={styles.menu}>
                    <div style={styles.menuItem}><Truck size={20} /> Deliveries</div>
                    <div style={styles.menuItem}><RotateCcw size={20} /> Returns</div>
                    <div style={styles.menuItem}><Gift size={20} /> Smart Rewards</div>
                    {/* <div style={styles.menuItem}><Target size={20} /> Schemes</div> */}
                    <Link href={"/dashboard"} style={styles.menuItem}><LayoutDashboard size={20} /> Dashoard </Link>
                    {/* <div style={styles.menuItem}><Settings size={20} /> Account Settings</div> */}
                </div>
            </div>
            <div style={styles.supportSection}>
            <div style={styles.helpText}>Need any help?</div>
            <div style={styles.supportHotline}>
                <button style={styles.callButton} onClick={handleButtonClick}>
                    <Phone size={20} /> Support Hotline
                </button>
                {showNumber ? (
                    <div style={styles.hotlineDetails}>Customer Executive Number: 7024409426</div>
                ) : (
                    <div style={styles.hotlineDetails}>Available 24 X 7· Monday to Sunday</div>
                )}
            </div>
        </div>
            <div style={styles.logoutSection}>
                <button style={styles.logoutButton} onClick={handleLogout}><LogOut size={20} /> Logout</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'green', // Changed from red to green
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    name: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    email: {
        fontSize: '14px',
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
    },
    section: {
        marginTop: '20px',
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
    },
    menuItem: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    new: {
        backgroundColor: 'lightgreen',
        color: 'green',
        padding: '2px 5px',
        borderRadius: '3px',
        fontSize: '12px',
        marginLeft: 'auto',
    },
    supportSection: {
        marginTop: '20px',
        backgroundColor: '#f9f9f9',
        padding: '10px',
        borderRadius: '5px',
    },
    helpText: {
        fontSize: '16px',
        marginBottom: '10px',
    },
    supportHotline: {
        display: 'flex',
        flexDirection: 'column',
    },
    callButton: {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    hotlineDetails: {
        marginTop: '5px',
        fontSize: '14px',
        color: 'gray',
    },
    logoutSection: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    logoutButton: {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
};

export default Business;
