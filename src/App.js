import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './screens/HomeScreen';
import ForKnowledgeScreen from './screens/ForKnowledge';
import TestScreen from './screens/TestScreen';
import JobsScreen from './screens/JobsScreen';
import CollegeandUniversities from './screens/CollegeandUniversities';
import InstructorsScreen from './screens/Instructors';
import Enterprise from './screens/Enterprise';
import Login from './screens/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-knowledge" element={<ForKnowledgeScreen />} />
        <Route path="/for-test" element={<TestScreen />} />
        <Route path="/for-jobs" element={<JobsScreen />} />
        <Route path="/for-colleges-universities" element={<CollegeandUniversities />} />
        <Route path="/for-instructors" element={<InstructorsScreen />} />
        <Route path="/for-enterprise" element={<Enterprise />} />
        <Route path="/for-login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
