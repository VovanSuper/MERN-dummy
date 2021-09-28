import ricknmortySvc from '../services/ricknmorty.service.js';

export default class {
  static all = async (req, resp, next) => {
    try {
      const { limit = 20, offset = 0 } = req.sanitizedQuery || {};
      const [data, dataLen] = await ricknmortySvc.getWithFilters({ limit, offset });
      return resp.status(200).json({ dataLen, data });
    } catch (error) {
      console.error(`[ricknmortyCtrl->all()] : ${error}`);
      return next(error);
    }
  };
}
