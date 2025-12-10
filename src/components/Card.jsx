
import { Tooltip } from "@/components/ui/tooltip"
import "../styles/Component-Styles/Card.css"
import "../styles/modal-lazy-loading.css"
import { Link, Box, Button } from "@chakra-ui/react"
import React, { Suspense, useState } from "react"

// Lazy load CardModal - only downloads when info button is clicked
const CardModal = React.lazy(() => import("./CardModal"))



export default function Card({ title, repo, deployed, image, desc }) {
  const [showModal, setShowModal] = useState(false);

  // Handle info button click - triggers lazy loading of CardModal
  const handleInfoClick = () => {
    setShowModal(true);
  };

  return (
    <>
    <Box className="card" style={{backgroundImage:`url(${image})`}} >
      <h1 className="card-title">{title}</h1>
      <Tooltip showArrow content="Repository">
        <Link 
        className="repo" 
        href={repo} 
        target="_blank"
        rel="noopener noreferrer" />
      </Tooltip>
      {deployed !== "" &&
        <Tooltip showArrow content="Website">
        <Link 
        className="deployed" 
        href={deployed} 
        target="_blank"
        rel="noopener noreferrer" />
        </Tooltip> 
      }
      <Tooltip showArrow content="More info">
        <Box className="info-pos"> 
          <Button className="modal-btn" onClick={handleInfoClick}>
            <div className="i"></div>
          </Button>
        </Box>
      </Tooltip>
      
      {/* Lazy load CardModal only when user clicks info button */}
      {showModal && (
        <Suspense fallback={
          <Box className="modal-loading">
            <div className="loading-text">Loading...</div>
          </Box>
        }>
          <CardModal 
            title={title} 
            description={desc} 
            onClose={() => setShowModal(false)}
          />
        </Suspense>
      )}
    </Box>
    
    </>
  )
}
