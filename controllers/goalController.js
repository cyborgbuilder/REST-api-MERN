const getGoals = (req, res) => {
    res.status(200).json({message: "get Goals"});
}

const setGoals = (req, res) => {
    console.log(req.body);
    res.status(200).json({message: "Set Goals"});
}

const updateGoals = (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`});
}

const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
}

module.exports =  {
    getGoals, setGoals, deleteGoals, updateGoals
}