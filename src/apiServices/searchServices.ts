import * as request from '@/utils/request';
 
export const search = async (q: string, type: string = 'less') => {
    try {
      const res = await request.get('users/search', {
        params: {
          q,
          type
        },
      });

      return res.data
    } catch (error: any) {
      console.log(error)
    }
  };