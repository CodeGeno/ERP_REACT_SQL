import { QueryResult } from '../utils/DbQuery.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'
const getRoles = async (req, res) => {
  const query = `SELECT * FROM Roles`
  const result = await QueryResult(query)
  console.log(result)
  res.status(StatusCodes.OK).json(result)
}
const newRole = async (req, res) => {
  const {
    role,
    accounting,
    estimate,
    manageClients,
    manageProducts,
    manageRights,
    orders,
  } = req.body
  const query = `INSERT INTO Roles VALUES('${role}',${estimate},${manageProducts},${manageRights},${orders},${accounting},${manageClients})`

  const result = await QueryResult(query)

  res.status(StatusCodes.OK).send('Role created!')
}
const updateRole = async (req, res) => {
  console.log(req.body)
  const {
    role,
    accounting,
    estimate,
    manageClients,
    manageProducts,
    manageRights,
    orders,
  } = req.body
  try {
    const query = `
    UPDATE Roles set 
    accounting=${accounting ? 1 : 0},
    estimate=${estimate ? 1 : 0},
    manageProducts=${manageProducts ? 1 : 0},
    manageRights=${manageRights ? 1 : 0},
    orders=${orders ? 1 : 0},
    accounting=${accounting ? 1 : 0},
    manageClients=${manageClients ? 1 : 0} 
    WHERE role='${role}'`
    const result = await QueryResult(query)
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    throw new BadRequestError(`Couldn't update the selected role`)
  }
}
const deleteRole = async (req, res) => {
  const { role } = req.params
  try {
    const query = `DELETE FROM Roles where role='${role}'`
    const result = await QueryResult(query)
    const resetQuery = `UPDATE Users SET role='user' WHERE role='${role}'`
    await QueryResult(resetQuery)
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    throw new BadRequestError(`Couldn't delete the selected role`)
  }
}
export { getRoles, newRole, updateRole, deleteRole }
