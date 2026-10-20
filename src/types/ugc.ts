export type VGCCategory = 'Todos' | 'Unboxing' | 'Historias' | 'Testimonios' | 'Estilo de Vida' | 'Anuncios';

export interface VideoProject {
  id: string;
  title: string;
  brand: string;
  category: VGCCategory;
  views: string;
  likes: string;
  ctr: string;
  gradient: string;
  hook: string;
  aspectRatio: string;
  tags: string[];
  videoSrc?: string;
}

export interface UGCPackage {
  id: string;
  name: string;
  badge?: string;
  nameBadge?: string;
  videosCount: number;
  description: string;
  deliveryTime: string;
  features: string[];
  recommended?: boolean;
  priceEstimate: string;
}
