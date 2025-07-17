import React from 'react';
import FormularioReserva from './components/FormularioReserva';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <header>
                <h1>Sistema de Reservas</h1>
            </header>
            <main>
                <FormularioReserva />
            </main>
        </div>
    );
};

export default App;