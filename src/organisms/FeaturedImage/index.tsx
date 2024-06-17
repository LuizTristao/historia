import React, { useState } from 'react';
import * as S from './styles';
import { FaUpload } from 'react-icons/fa';

const FeaturedImage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setImageSrc(e.target.result.toString());
                    setIsEditing(true);
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setIsEditing(false);
        }
    };

    const handleUploadClick = () => {
        setImageSrc('');
        setDescription('');
        setIsEditing(true);
    };

    return (
        <S.Container>
            <S.Title>Destaque do Mês</S.Title> {/* Adicionado título */}
            <S.UploadButton htmlFor="imageInput" onClick={handleUploadClick}>
                <FaUpload />
            </S.UploadButton>
            {imageSrc && (
                <S.ImageContainer>
                    <S.ImageWrapper isEditing={isEditing}>
                        <S.Image src={imageSrc} alt="Featured" />
                    </S.ImageWrapper>
                    {isEditing && (
                        <S.Overlay>
                            <S.DescriptionInput
                                type="text"
                                value={description}
                                onChange={handleDescriptionChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Digite a legenda"
                            />
                        </S.Overlay>
                    )}
                </S.ImageContainer>
            )}
            <S.Input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} />
            {description && !isEditing && <S.Description>{description}</S.Description>}
        </S.Container>
    );
};

export default FeaturedImage;
