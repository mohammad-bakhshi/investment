import { getUserByID } from '../../models/user/user.model.js';

export const httpProfilePage = async (req, res) => {
  const user = await getUserByID(req.session.userID)
  return res.status(200).render('profile', { title: `پروفایل ${user.username}`, user })
}