const express = require('express');
const router = express.Router();
const projectsData = require('../projectsData');

router.get('/', (req, res) => {
    res.render("home");
});

router.get('/about-me', (req, res) => {
    return res.render("aboutme")
})


router.get('/projects', (req, res) => {
    return res.render("projects", {projectsData})
})

// para acceder al id 
router.get('/projects/:id', (req, res) => {
    const { id } = req.params
    const projects = projectsData.find( project => project.id == id)
    return res.render("projects-id", { projects })
})



module.exports = router;
