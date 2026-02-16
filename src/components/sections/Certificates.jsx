// src/components/sections/Certificates.jsx
import { useState } from 'react';
import './Sections.css';

const Certificates = ({ certificates }) => {
    const [selectedCert, setSelectedCert] = useState(null);

    const openModal = (cert) => {
        setSelectedCert(cert);
    };

    const closeModal = () => {
        setSelectedCert(null);
    };

    const getFullUrl = (url) => {
        if (url.startsWith('http')) return url;
        const baseUrl = import.meta.env.BASE_URL || '/';
        // Ensure we don't end up with // if the url already starts with /
        return (baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl) + (url.startsWith('/') ? url : '/' + url);
    };

    return (
        <article className="article active">
            <section>
                <div className="certificates-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="certificate-item"
                            onClick={() => openModal(cert)}
                            style={{
                                background: 'var(--border-gradient-onyx)',
                                padding: '20px',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                cursor: 'pointer',
                                transition: '0.3s',
                                border: '1px solid var(--jet)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.background = 'var(--eerie-black-1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'var(--border-gradient-onyx)';
                            }}
                        >
                            <div className="cert-icon" style={{ fontSize: '30px' }}>
                                {cert.fileUrl && cert.fileUrl.endsWith('.pdf') ? '📄' : '📜'}
                            </div>
                            <div className="cert-info" style={{ flex: 1 }}>
                                <p className="cert-category" style={{ color: 'var(--vegas-gold)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>
                                    {cert.issuer} • {cert.date}
                                </p>
                                <h3 className="cert-title" style={{ color: 'var(--white-2)', fontSize: '16px', fontWeight: '500' }}>
                                    {cert.title}
                                </h3>
                            </div>
                            <div className="cert-view-btn" style={{ color: 'var(--orange-yellow-crayola)', fontSize: '20px' }}>
                                👁️
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certificate Detail Modal */}
            {selectedCert && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✕</button>

                        <div className="modal-body">
                            <p className="modal-category">{selectedCert.issuer} • {selectedCert.date}</p>
                            <h3 className="modal-title" style={{ marginBottom: '20px' }}>{selectedCert.title}</h3>

                            <div className="cert-viewer-container" style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', background: '#1e1e1f', marginBottom: '20px' }}>
                                {selectedCert.fileUrl && selectedCert.fileUrl.endsWith('.pdf') ? (
                                    <iframe
                                        src={getFullUrl(selectedCert.fileUrl)}
                                        title={selectedCert.title}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 'none' }}
                                    />
                                ) : (
                                    <img
                                        src={getFullUrl(selectedCert.fileUrl)}
                                        alt={selectedCert.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                )}
                            </div>

                            <div className="modal-links">
                                <a
                                    href={getFullUrl(selectedCert.fileUrl)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-link modal-link-github"
                                    download
                                >
                                    Download Certificate
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};

export default Certificates;
