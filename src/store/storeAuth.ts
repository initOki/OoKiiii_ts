import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

// types
import {
    StoreAuthTypes,
    getUserInfoResponseTypes,
    getUserRepositoryResponseTypes,
    repositoryResponse,
} from 'src/store/storeAuth.d';

// api
import { CustomAPI } from '@/pages/api/customAPI';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

type MyPersist = (
    config: StateCreator<StoreAuthTypes>,
    options: PersistOptions<StoreAuthTypes>,
) => StateCreator<StoreAuthTypes>;

const initialState: StoreAuthTypes = {
    profileImage: '',
    name: null,
    email: null,
    url: null,
    repository: null,
};

export const useStoreAuth = create<StoreAuthTypes>(
    (persist as unknown as MyPersist)(
        (set, get) => ({
            ...initialState,
            getUserInfo: async () => {
                const { githubInstance } = CustomAPI();
                const req: AxiosRequestConfig = {
                    data: 'initOki',
                };
                try {
                    const response: getUserInfoResponseTypes = await githubInstance.get('/users/' + req.data);
                    if (response.data.id === 61795897) {
                        set(() => ({
                            profileImage: response.data.avatar_url,
                            name: response.data.login,
                            url: response.data.html_url,
                        }));
                    }
                } catch {}
            },
            getUserRepository: async () => {
                const { githubInstance } = CustomAPI();
                const req: AxiosRequestConfig = {
                    data: 'initOki',
                };
                try {
                    const response: repositoryResponse = await githubInstance.get('/users/' + req.data + '/repos');
                    set(() => ({
                        repository: response.data,
                    }));
                } catch {}
            },
        }),
        {
            name: 'me',
            getStorage: () => sessionStorage,
        },
    ),
);
